import React from 'react';
import '../../components/loginpage/login.css';
import { useNavigate} from 'react-router-dom';

export default function login() {
    const navigate = useNavigate();

    const navigateHome = () => {
        let Emailid = document.getElementById('email').value;
        let Password = document.getElementById('pass').value;
        if(Emailid === 'ravi' && Password === '123'){
            navigate('/Page1');
        }else{
            window.alert('Worng Email id or password');
        }
        
    };
    return (

        <div className='login-page'>
            <div className='login-container container'>
                <div className="login-row">
                    <div className="row">
                        <div className="col-8">
                            <h1 className='login-left-h1'>Welcome To TINTIN</h1>
                            <p className='login-left-p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam libero eum odit nemo rerum molestiae, odio quod aliquid ab nostrum voluptatem quae dolores quisquam, ut perferendis animi ea, nam consectetur quia earum. Quibusdam doloremque debitis excepturi natus iusto neque velit officiis rerum! Odio ducimus deleniti architecto non rerum, accusantium consequatur!</p>
                        </div>
                        <div className="col-4">
                            <div className="login-elements">
                                <h3>Login</h3>
                                <input type="text" placeholder='Email' id='email'/>
                                <br />
                                <input type="text" placeholder='Password' id='pass'/>
                                <br />
                                <button onClick={navigateHome}>Login</button>
                                <br />
                                <p className='forget-pass'>Forget password ?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
