import Footer from './Footer';
import { connect } from 'react-redux';
import { getAuth } from '../../services/reducers';
import { manageAuthModal } from '../../services/actions';

const FooterContainer = ({ manageAuthModal, ...props}) => {
    return (
        <Footer openRegister={() => manageAuthModal(true, true)} {...props} />
    )
}

const mapStateToProps = (state) => ({
    hasAuth: getAuth(state)
})

export default connect(mapStateToProps, { manageAuthModal })(FooterContainer);