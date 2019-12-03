
import SignUp from '../components/form/SignUp'
import {connect} from 'react-redux'
import { registerUser } from '../ducks/app/actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  onRegisterRequest: registerUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp)