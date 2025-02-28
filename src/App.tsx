import { SmartCaptcha } from '@yandex/smart-captcha';
import {useEffect, useState} from 'react'
import ReCAPTCHA from "react-google-recaptcha";

function App() {
    const [token, setToken] = useState<string>()
    const [captchaVariant, setCaptchaVariant] = useState(1)

    useEffect(() => {
        setToken(undefined)
    }, [captchaVariant]);

    return (
        <div>

            <div style={{display: "flex", gap: '16px'}}>
                <button onClick={setCaptchaVariant.bind(null, 1)}>YandexCaptcha</button>
                <button onClick={setCaptchaVariant.bind(null, 2)}>ReCAPTCHA</button>
            </div>
            <br />
            {captchaVariant === 1 && <SmartCaptcha
                sitekey="ysc1_PLzNIMA5rFE9dXkEXdHAsbaPb20qFaGZ9GQsk17K5ae9fb61"
                onJavascriptError={(e) => console.log(`JS Error:`, e)}
                onNetworkError={() => console.info(`NETWORK ERROR`)}
                onSuccess={setToken}
            />
            }
            {captchaVariant === 2 &&
                <ReCAPTCHA onChange={token => setToken(token as string)} sitekey={'6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}/>
            }

            <div>
                {token && <><p>token: <span style={{ color: "red"}}>{token}</span></p><br /></>}
            </div>
        </div>
    )
}

export default App
