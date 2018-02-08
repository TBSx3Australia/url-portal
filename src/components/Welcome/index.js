import React from 'react'

const Welcome = () => (
   <div>
      <div>
         <span>Install essential tools:</span>
         <blockquote>$ sh -c  “$(curl -sSfL https://goo.gl/KWECGm)”</blockquote>
      </div>
      <div>
         <span>open another terminal, agree to xcode license</span>
         <blockquote>$ sudo xcodebuild -license</blockquote>
      </div>
   </div>
)

export default Welcome
