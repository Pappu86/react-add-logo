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
import _ from 'underscore';

const LogoCustomisation = () => {
    console.log("This is parent");

    const [selectedPositions, setSelectedPositions] = useState([]);
    const [appMethodName, setAppMethodName] = useState("");
    const [appMethodTypeName, setAppMethodTypeName] = useState("");
    const [currentStep, setCurrentStep] = useState("");
    let newArray = [];

    const handelStepper = (step) => {
        console.log("final_step", step);
        setCurrentStep(step);
    };

    const handleLogoPosition = (data) => {
        const positions = data.positions;
        console.log("handleLogoPosition_12345656756655: ", positions);
        newArray = positions;
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

    function step1Validator() {
        return true;
    }

    let stepProgress = [
        {
            label: 'Positio',
            subtitle: '',
            name: 'step 1',
            content: <ChoosePosition positions={selectedPositions} onClick={handleLogoPosition} setStepper={handelStepper} />,
            validator: step1Validator
        },
        {
            label: 'Application',
            subtitle: '',
            name: 'step 2',
            content: <ApplicationMethod name={appMethodName} onClick={handleAppMethod} setStepper={handelStepper} />
        },
        {
            label: 'Artwork',
            subtitle: '',
            name: 'step 3',
            content: <Artwork setStepper={handelStepper} />
        },
        {
            label: 'Type',
            subtitle: '',
            name: 'step 4',
            content: <ApplicationType name={appMethodTypeName} onClick={handleAppType} setStepper={handelStepper} />
        },
        {
            label: 'Configure logo',
            subtitle: '',
            name: 'step 5',
            content: <ConfigureLogo />
        }
    ];



    useEffect(() => {
        console.log("useEffect_selectedPositions_111111: ", selectedPositions);
        setSelectedPositions(selectedPositions);
        console.log("useEffect_currentStep", currentStep);
        console.log("useEffect_stepProgress", stepProgress);

        stepProgress = _.map(stepProgress, (item, index) => {
            console.log("item", item, index);
            if (index === currentStep) {
                item.lastUpdate = new Date();
            }
        });

    }, [selectedPositions, stepProgress, currentStep]);


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

export default LogoCustomisation;