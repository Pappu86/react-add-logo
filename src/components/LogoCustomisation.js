//import _ from 'underscore';
import { Container, Row, Col, } from 'react-bootstrap';
import 'react-step-progress/dist/index.css';
import StepProgressBar from 'react-step-progress';

import { useState, useEffect } from 'react';
import ChoosePosition from './stepProgress/ChoosePosition';
import ApplicationMethod from './stepProgress/ApplicationMethod';
import Artwork from './stepProgress/Artwork';
import ApplicationType from './stepProgress/ApplicationType';
import ConfigureLogo from './stepProgress/ConfigureLogo';

import { connect, useDispatch } from "react-redux";
import { stepBarOne } from './../store/actions/logoCustomisation';

const LogoCustomisation = () => {
    console.log("This is parent");

    let newArray = [];

    const dispatch = useDispatch();
    const [selectedPositions, setSelectedPositions] = useState([]);
    const [appMethodName, setAppMethodName] = useState("");
    const [appMethodTypeName, setAppMethodTypeName] = useState("");

    const handleLogoPosition = (data) => {
        const positions = data.positions;
        console.log("handleLogoPosition-12345656756655: ", positions);
        setSelectedPositions(positions);
    };

    const handleAppMethod = (data) => {
        console.log("Data", data);
        const name = data.name;
        setAppMethodTypeName(name);
    };

    const handleAppType = (data) => {
        console.log("Data", data);
        const name = data.name;
        setAppMethodName(name);
    };

    function step1Validator(props) {
        // return a boolean
        console.log("pappu-click", props);
        console.log("newArray-000000000:", newArray);
        dispatch(stepBarOne({ positions: selectedPositions }));
        console.log("newArray-000000000:", newArray);
        return true;
    }


    let stepProgress = [
        {
            label: 'Positio',
            subtitle: '',
            name: 'step 1',
            content: <ChoosePosition positions={selectedPositions} onClick={handleLogoPosition} />,
            validator: step1Validator
        },
        {
            label: 'Application',
            subtitle: '',
            name: 'step 2',
            content: <ApplicationMethod name={appMethodName} onClick={handleAppMethod} />
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
            content: <ApplicationType name={appMethodTypeName} onClick={handleAppType} />
        },
        {
            label: 'Configure logo',
            subtitle: '',
            name: 'step 5',
            content: <ConfigureLogo />
        }
    ];

    console.log("stepProgress", stepProgress);

    useEffect(() => {
        console.log("selectedPositions-111111: ", selectedPositions);
        //console.log("appMethodName", appMethodName);
        newArray = selectedPositions;
        console.log("newArray-000000000:", newArray);
    }, [selectedPositions]);


    function onFormSubmit(e) {
        // handle the submit logic here
        // This function will be executed at the last step
        // when the submit button (next button in the previous steps) is pressed
    }

    return (
        <Container fluid className="logo-customisation">
            <Row>
                <Col><h1 className="page-title">Add Customisation</h1></Col>
                <div>
                    {/* <ChoosePosition positions={selectedPositions} onClick={handleLogoPosition} /> */}
                </div>
            </Row>
            <Row>
                <div className="step-bar">
                    <StepProgressBar startingStep={0} onSubmit={onFormSubmit} steps={stepProgress}
                        stepClass="step-circle" primaryBtnClass="primary-btn" nextBtnName="Continue"
                        secondaryBtnClass="secondary-btn" submitBtnName="Finish" />;
                </div>
            </Row>
        </Container>
    )
}

export default connect("", { stepBarOne })(LogoCustomisation);
