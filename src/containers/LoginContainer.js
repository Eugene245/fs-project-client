import Login from '../components/form/Login'
import {connect} from 'react-redux'
import { loginUser } from '../ducks/app/actions'

const mapStateToProps = () => ({})

const mapDispatchToProps = {
  onLoginRequest: loginUser,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)