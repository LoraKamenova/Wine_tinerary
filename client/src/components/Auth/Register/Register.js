import './Register.css'
import {Component} from 'react';
import FormHeader from "../../Other/FormHeader/FormHeader";
import authenticate from "../../../utils/authenticate";
import UserContext from "../../../Context";

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            rePassword: "",
            avatarUrl: ""
        }
    }

    static contextType = UserContext;

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {
            username,
            password,
            avatarUrl
        } = this.state

        await authenticate('http://localhost:5000/api/user/register', {
                username,
                password,
                avatarUrl
            }, (user) => {
                this.context.logIn(user)
                this.props.history.push('/home')
            }, (e) => {
                console.log('Error', e)
            }
        )
    }

    render() {
        const {
            username,
            avatarUrl,
            password,
            rePassword
        } = this.state

        return (
            <section className="auth-form-wrapper register-form-wrapper">
                <FormHeader title="Регистрация"/>
                <form className="auth-form" onSubmit={this.handleSubmit}>

                    <div className="auth-form-field-wrapper">
                        <div className="auth-form-field-heading">
                            <label htmlFor="username">Потребителско име*:</label>
                        </div>
                        <input className="auth-form-field-input"
                               type="text"
                               id="username"
                               name="username"
                               required
                               value={username}
                               onChange={(e) => this.onChange(e, 'username')}/>
                    </div>

                    <div className="auth-form-field-wrapper">
                        <div className="auth-form-field-heading">
                            <label htmlFor="avatarUrl">URL профилна снимка:</label>
                        </div>
                        <input className="auth-form-field-input"
                               type="avatarUrl"
                               id="avatarUrl"
                               name="avatarUrl"
                               value={avatarUrl}
                               onChange={(e) => this.onChange(e, 'avatarUrl')}/>
                    </div>

                    <div className="auth-form-field-wrapper">
                        <div className="auth-form-field-heading">
                            <label htmlFor="password">Парола*:</label>
                        </div>
                        <input className="auth-form-field-input"
                               type="password"
                               id="password"
                               name="password"
                               required
                               value={password}
                               onChange={(e) => this.onChange(e, 'password')}/>
                    </div>

                    <div className="auth-form-field-wrapper">
                        <div className="auth-form-field-heading">
                            <label htmlFor="rePassword">Повторете паролата*:</label>
                        </div>
                        <input className="auth-form-field-input"
                               type="password"
                               id="rePassword"
                               name="rePassword"
                               required
                               value={rePassword}
                               onChange={(e) => this.onChange(e, 'rePassword')}/>
                    </div>
                    <span className="form-info">Полетата, отбелязани със (*) са задъжлителни</span>

                    <div className="auth-form-button-wrapper">
                        <input className="auth-form-button" type="submit" value="ИЗПРАТИ"/>
                    </div>
                </form>

            </section>
        )
    }
}

export default Register;
