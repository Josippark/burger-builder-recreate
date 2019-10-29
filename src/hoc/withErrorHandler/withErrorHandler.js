import React from 'react';
import Aux from '../Auxi';
import Modal from '../../containers/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent,axios) => {
    return class extends React.Component {
        state= {
            error: null
        }


        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use( req => {
                this.setState({
                    error: null
                })
                return req;
            });
            this.resInterceptor = axios.interceptors.response.use(response => response,error =>{
                this.setState({
                    error: error
                })

            })
        }

        componentWillUnmount(){
            console.log('Will unmount', this.reqInterceptor, this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.request.eject(this.resInterceptor);
        }

        errorConfirmError= () => {
            this.setState({
                error: null
            })
        }


        render() {
            return (
                <Aux>
                    <Modal show = {this.state.error} modalClosed = {this.errorConfirmError}>
                        {this.state.error ? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>

            );
        }
    }
}
export default withErrorHandler;