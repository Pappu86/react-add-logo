//import _ from 'underscore';
import { Container, Row, Col, } from 'react-bootstrap';
import 'react-step-progress/dist/index.css';
import StepProgressBar from 'react-step-progress';

import { useState, useEffect, createContext } from 'react';
import ChoosePosition from './stepProgress/ChoosePosition';
import ApplicationMethod from './stepProgress/ApplicationMethod';
import Artwork from './stepProgress/Artwork';
import ApplicationType from './stepProgress/ApplicationType';
import ConfigureLogo from './stepProgress/ConfigureLogo';
import _ from 'underscore';

export const AddCustomisationContext = createContext({});

const LogoCustomisation = () => {
    console.log("This is parent");

    const [selectedPositions, setSelectedPositions] = useState([]);
    const [selectedAppMethod, setSelectedAppMethod] = useState("embroidery");
    const [selectedAppMethodType, setSelectedAppMethodType] = useState("logo");

    // useEffect(() => {
    //     console.log("--- parent useEffect---- selectedPositions----", selectedPositions);
    // }, [selectedPositions]);

    const handleLogoPositions = (data) => {
        const positions = data.positions;
        setSelectedPositions(positions);
    };

    const handleAppMethod = (data) => {
        const name = data && data.name;
        setSelectedAppMethod(name);
    };

    const handleAppType = (data) => {
        console.log("---- Data handleAppType", data);
        const name = data && data.name;
        setSelectedAppMethodType(name);
    };

    function step1Validator() {
        return true;
    }

    let stepProgress = [
        {
            label: 'Positio',
            subtitle: '',
            name: 'step 1',
            content: <ChoosePosition />,
            validator: step1Validator
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
        // handle the submit logic here
        // This function will be executed at the last step
        // when the submit button (next button in the previous steps) is pressed
    }


    return (
        <Container fluid className="logo-customisation">
            <Row>
                <Col><h1 className="page-title">Add Customisation</h1></Col>
            </Row>
            <Row>
                <AddCustomisationContext.Provider value={{
                    positions: selectedPositions,
                    methodName: selectedAppMethod,
                    methodTypeName: selectedAppMethodType,
                    handleLogoPositions,
                    handleAppMethod,
                    handleAppType
                }}>
                    <div className="step-bar">
                        <StepProgressBar startingStep={0} onSubmit={onFormSubmit} steps={stepProgress}
                            stepClass="step-circle" primaryBtnClass="primary-btn" nextBtnName="Continue"
                            secondaryBtnClass="secondary-btn" submitBtnName="Finish" />;
                    </div>
                </AddCustomisationContext.Provider>
            </Row>
        </Container>
    )
}

export default LogoCustomisation;