import { Container, Row, Col, } from 'react-bootstrap';
import 'react-step-progress/dist/index.css';
import StepProgressBar from 'react-step-progress';

import ChoosePosition from './stepProgress/ChoosePosition';

const LogoCustomisation = () => {
    const step1Content = ChoosePosition();
    const step2Content = <h1>Step 2 Content</h1>;
    const step3Content = <h1>Step 3 Content</h1>;

    const stepProgress = [
        {
            label: 'Positio',
            subtitle: '',
            name: 'step 1',
            content: step1Content
        },
        {
            label: 'Application',
            subtitle: '',
            name: 'step 2',
            content: <h1>Step 2 Content</h1>
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



    function onFormSubmit() {
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
                <div className="step-bar">
                    <StepProgressBar startingStep={0} onSubmit={onFormSubmit} steps={stepProgress} />;
                </div>
            </Row>
        </Container>
    )
}

export default LogoCustomisation
