import React from 'react';
import AdvancedRecsForm from '../components/AdvancedRecsForm';
import Container from 'react-bootstrap/Container';

class AdvancedRecsFormContainer extends React.Component {
  render(){
    return(
      <>
        <Container>
          <h3 className="text-center my-3">Advanced Recommendation Options</h3>
          <AdvancedRecsForm />
        </Container>
      </>
    )
  }
}

export default AdvancedRecsFormContainer;