import { SmartCaptcha } from '@yandex/smart-captcha';
import { useState } from 'react'

function App() {
  const [token, setToken] = useState<string>()

  return ( 
    <div>
      {token && <><p>token: <span style={{whiteSpace: "wrap", color: "red"}}>{token}</span></p><br /></>}
      
      <SmartCaptcha 
        sitekey="ysc1_PLzNIMA5rFE9dXkEXdHAsbaPb20qFaGZ9GQsk17K5ae9fb61" 
        onJavascriptError={(e) => console.log(`JS Error:`, e)} 
        onNetworkError={() => console.info(`NETWORK ERROR`)}
        onSuccess={setToken} 
      />
    </div>
  )
}

export default App
