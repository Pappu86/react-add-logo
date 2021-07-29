import _ from 'underscore';
import { Container, Row, Col, } from 'react-bootstrap';
import 'react-step-progress/dist/index.css';
import StepProgressBar from 'react-step-progress';

import { useState, createContext } from 'react';
import { useHistory } from 'react-router-dom';
import ChoosePosition from './stepProgress/ChoosePosition';
import ApplicationMethod from './stepProgress/ApplicationMethod';
import Artwork from './stepProgress/Artwork';
import ApplicationType from './stepProgress/ApplicationType';
import ConfigureLogo from './stepProgress/ConfigureLogo';
import SettingHelpers from '../settings/Settings';


export const AddCustomisationContext = createContext({});

const LogoCustomisation = ({ location }) => {
    console.log("This is parent");
    const queryParams = location && location.query ? location.query : null;
    const productId = queryParams && queryParams.productId ? queryParams.productId : "";
    const selectedSize = queryParams && _.size(queryParams.selectedSize) ? queryParams.selectedSize : [];

    const [selectedPositions, setSelectedPositions] = useState([]);
    const [selectedAppMethod, setSelectedAppMethod] = useState("embroidery");
    const [selectedAppMethodType, setSelectedAppMethodType] = useState("logo");
    const [selectedLogoManageType, setSelectedLogoManageType] = useState("upload_logo");
    const [errorMessage, setErrorMessage] = useState(false);

    const handleLogoPositions = (data) => {
        const positions = data.positions;
        setSelectedPositions(positions);
        setErrorMessage("");
    };

    const handleAppMethod = (data) => {
        const name = data && data.name;
        setSelectedAppMethod(name);
    };

    const handleAppType = (data) => {
        const name = data && data.name;
        setSelectedAppMethodType(name);
    };

    const handleManageLogo = (data) => {
        const name = data && data.type;
        setSelectedLogoManageType(name);
    };

    // Step one validator
    const stepOneValidator = () => {
        const elementIds = SettingHelpers.DefaultPositions();
        let isValid = false;

        _.each(elementIds, (elementId) => {
            let isChecked = document.getElementById(elementId).checked;
            if (isChecked) isValid = true;
        });
        if (!isValid) setErrorMessage(true);
        return isValid;
    };

    let stepProgress = [
        {
            label: 'Positio',
            subtitle: '',
            name: 'step 1',
            content: <ChoosePosition />,
            validator: stepOneValidator
        },
        {
            label: 'Application',
            subtitle: '',
            name: 'step 2',
            content: <ApplicationMethod />
        },
        {
            label: 'Artwork',
            subtitle: '',
            name: 'step 3',
            content: <Artwork />
        },
        {
            label: 'Type',
            subtitle: '',
            name: 'step 4',
            content: <ApplicationType />
        },
        {
            label: 'Configure logo',
            subtitle: '',
            name: 'step 5',
            content: <ConfigureLogo />
        }
    ];


    function onFormSubmit(e) {
        //useHistory.push('/basket');
    }


    return (
        <Container fluid className="logo-customisation">
            <Row>
                <Col><h1 className="page-title">Add Customisation</h1></Col>
            </Row>
            <Row>
                <AddCustomisationContext.Provider value={{
                    productId: productId,
                    positions: selectedPositions,
                    methodName: selectedAppMethod,
                    methodTypeName: selectedAppMethodType,
                    selectedLogoManageType: selectedLogoManageType,
                    errorMessage: errorMessage,
                    handleLogoPositions,
                    handleAppMethod,
                    handleAppType,
                    handleManageLogo
                }}>
                    <div className="step-bar">
                        <StepProgressBar startingStep={0} onSubmit={onFormSubmit} steps={stepProgress}
                            stepClass="step-circle" primaryBtnClass="primary-btn"
                            secondaryBtnClass="secondary-btn" submitBtnName="Finish" />;
                    </div>
                </AddCustomisationContext.Provider>
            </Row>
        </Container>
    )
}

export default LogoCustomisation;