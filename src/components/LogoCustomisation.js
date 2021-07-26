//import _ from 'underscore';
import { Container, Row, Col, } from 'react-bootstrap';
import 'react-step-progress/dist/index.css';
import StepProgressBar from 'react-step-progress';

import { useState, useEffect } from 'react';
import ChoosePosition from './stepProgress/ChoosePosition';
import ApplicationMethod from './stepProgress/ApplicationMethod';

const LogoCustomisation = () => {
    console.log("This is parent");

    const [selectedPositions, setSelectedPositions] = useState([]);
    const [appMethodName, setAppMethodName] = useState("");

    const handleLogoPosition = (data) => {
        const positions = data.positions;
        console.log("handleLogoPosition: ", positions);
        setSelectedPositions(positions);
    };

    const handleAppMethod = (data) => {
        console.log("Data", data);
        const name = data.name;
        setAppMethodName(name);
    };

    let stepProgress = [
        {
            label: 'Positio',
            subtitle: '',
            name: 'step 1',
            content: <ChoosePosition positions={selectedPositions} onClick={handleLogoPosition} />
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
            content: <h1>Step 3 Content</h1>
        },
        {
            label: 'Type',
            subtitle: '',
            name: 'step 4',
            content: <h1>Step 4 Content</h1>
        },
        {
            label: 'Configure logo',
            subtitle: '',
            name: 'step 5',
            content: <h1>Step 5 Content</h1>
        }
    ];

    console.log("stepProgress", stepProgress);

    useEffect(() => {
        console.log("selectedPositions: ", selectedPositions);
        console.log("appMethodName", appMethodName);
        setSelectedPositions(selectedPositions);
    }, []);


    function onFormSubmit() {
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
                    <StepProgressBar startingStep={0} onSubmit={onFormSubmit} steps={stepProgress} />;
                </div>
            </Row>
        </Container>
    )
}

export default LogoCustomisation
