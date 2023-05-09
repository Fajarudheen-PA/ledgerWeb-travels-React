import React from 'react';
import './Overview.scss'

function Overview() {
  return (
    <div className='overview'>
        <div className="content-wrapper">
            <div className="overview__wrap">
                <div className="overview__left">
                  <h2 className='overview__main-header'>Get Experience Which are fun</h2>
                  <p className='overview__desc'>With <strong>ledger Webb</strong> you can get the best experience on holiday travel, and we always update the latest and best and fair prices in the market. </p>
                  <img src="../../../images/ledger-overview.png" alt="Overview" className='overview__image' />
                </div>
                <div className="overview__right">
                  <div className="overview__feature-grp">
                    <div className='overview__icon-grp'>
                      <svg height="90" className="overview__icon-grp__icon" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.08" width="90" height="90" rx="45" fill="url(#paint0_linear_1434_836)"/>
                        <path d="M52.6011 30.6304C58.0619 30.6304 61.2848 33.7726 61.2848 39.1516H54.5856V39.2064C51.4764 39.2064 48.9559 41.6638 48.9559 44.6951C48.9559 47.7264 51.4764 50.1838 54.5856 50.1838H61.2848V50.6778C61.2848 55.9881 58.0619 59.1304 52.6011 59.1304H38.3019C32.8411 59.1304 29.6182 55.9881 29.6182 50.6778V39.0829C29.6182 33.7726 32.8411 30.6304 38.3019 30.6304H52.6011ZM60.1026 41.5117C60.7555 41.5117 61.2848 42.0277 61.2848 42.6643V46.6711C61.2772 47.3045 60.7524 47.8163 60.1026 47.8237H54.7122C53.1382 47.8443 51.7619 46.7936 51.4048 45.2989C51.226 44.371 51.477 43.4135 52.0905 42.683C52.704 41.9526 53.6173 41.5238 54.5856 41.5117H60.1026ZM55.3456 43.3641H54.8248C54.5051 43.3605 54.1972 43.4817 53.9698 43.7008C53.7424 43.92 53.6145 44.2187 53.6145 44.5305C53.6144 45.1845 54.1541 45.7167 54.8248 45.7243H55.3456C56.014 45.7243 56.5559 45.1959 56.5559 44.5442C56.5559 43.8925 56.014 43.3641 55.3456 43.3641ZM46.0567 36.7914H37.1196C36.4566 36.7914 35.917 37.3114 35.9093 37.9578C35.9093 38.6118 36.4489 39.144 37.1196 39.1516H46.0567C46.7252 39.1516 47.2671 38.6232 47.2671 37.9715C47.2671 37.3198 46.7252 36.7914 46.0567 36.7914Z" fill="url(#paint1_linear_1434_836)"/>
                        <defs>
                        <linearGradient id="paint0_linear_1434_836" x1="0" y1="0" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#8482FF"/>
                        <stop offset="1" stop-color="#7723FE"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1434_836" x1="29.6182" y1="30.6304" x2="57.9607" y2="62.1221" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#8482FF"/>
                        <stop offset="1" stop-color="#7723FE"/>
                        </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="overview__content">
                      <h3>Affordable Prices</h3>
                      <p>We provide some very affordable prices compared to others.</p>
                    </div>
                  </div>
                  <hr/>
                  <div className="overview__feature-grp">
                    <div className='overview__icon-grp'>
                      <svg height="90" className="overview__icon-grp__icon" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.08" width="90" height="90" rx="45" fill="url(#paint0_linear_1434_847)"/>
                        <path d="M45.3701 49.021C50.8028 49.021 55.4416 49.8823 55.4416 53.3288C55.4416 56.7739 50.8326 57.6666 45.3701 57.6666C39.9374 57.6666 35.2987 56.8053 35.2987 53.3602C35.2987 49.9136 39.9077 49.021 45.3701 49.021ZM54.0564 46.9456C56.1333 46.9071 58.3662 47.1923 59.1914 47.3948C60.9394 47.7385 62.0892 48.44 62.5655 49.4596C62.9682 50.2966 62.9682 51.2677 62.5655 52.1033C61.8368 53.6847 59.4877 54.1924 58.5747 54.3236C58.3861 54.3521 58.2344 54.1881 58.2542 53.9984C58.7207 49.6165 55.0105 47.5388 54.0507 47.0611C54.0096 47.0398 54.0011 47.007 54.0053 46.987C54.0082 46.9727 54.0252 46.9499 54.0564 46.9456ZM36.4553 46.9427L36.8464 46.9462C36.8776 46.9505 36.8932 46.9733 36.896 46.9861C36.9003 47.0075 36.8917 47.0389 36.852 47.0617C35.8908 47.5394 32.1807 49.617 32.6471 53.9976C32.6669 54.1887 32.5167 54.3512 32.3281 54.3241C31.4151 54.1929 29.0659 53.6853 28.3372 52.1039C27.9332 51.2669 27.9332 50.2972 28.3372 49.4602C28.8136 48.4406 29.9619 47.739 31.71 47.394C32.5365 47.1929 34.768 46.9077 36.8464 46.9462L36.4553 46.9427ZM45.3701 32.3333C49.069 32.3333 52.0348 35.3135 52.0348 39.0353C52.0348 42.7556 49.069 45.7387 45.3701 45.7387C41.6713 45.7387 38.7054 42.7556 38.7054 39.0353C38.7054 35.3135 41.6713 32.3333 45.3701 32.3333ZM54.4179 33.4509C57.9906 33.4509 60.7962 36.8319 59.8407 40.5978C59.1956 43.1332 56.8606 44.8173 54.2591 44.7488C53.9982 44.7417 53.7416 44.7174 53.4935 44.6747C53.3135 44.6433 53.2228 44.4394 53.3248 44.2882C54.3172 42.8195 54.8829 41.0527 54.8829 39.1562C54.8829 37.177 54.2648 35.3318 53.1916 33.8188C53.1575 33.7718 53.132 33.699 53.166 33.6449C53.1944 33.6006 53.2469 33.5778 53.2965 33.5664C53.658 33.4923 54.0294 33.4509 54.4179 33.4509ZM36.4827 33.4508C36.8712 33.4508 37.2426 33.4921 37.6056 33.5663C37.6538 33.5777 37.7076 33.6019 37.736 33.6447C37.7686 33.6989 37.7445 33.7716 37.7105 33.8187C36.6373 35.3316 36.0191 37.1768 36.0191 39.156C36.0191 41.0526 36.5848 42.8193 37.5772 44.2881C37.6793 44.4392 37.5886 44.6431 37.4085 44.6745C37.159 44.7187 36.9038 44.7415 36.6429 44.7487C34.0414 44.8171 31.7064 43.1331 31.0614 40.5977C30.1044 36.8317 32.9101 33.4508 36.4827 33.4508Z" fill="url(#paint1_linear_1434_847)"/>
                        <defs>
                        <linearGradient id="paint0_linear_1434_847" x1="0" y1="0" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F9EC7D"/>
                        <stop offset="1" stop-color="#F5B100"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1434_847" x1="28.0342" y1="32.3333" x2="52.1351" y2="65.472" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#F9EC7D"/>
                        <stop offset="1" stop-color="#F5B100"/>
                        </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="overview__content">
                      <h3>Unforgettable Experience</h3>
                      <p>We provide a vacation experience that will be unforgettable.</p>
                    </div>
                  </div>
                  <hr/>
                  <div className="overview__feature-grp">
                    <div className='overview__icon-grp'>
                      <svg height="90" className="overview__icon-grp__icon" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect opacity="0.08" width="90" height="90" rx="45" fill="url(#paint0_linear_1434_858)"/>
                        <path d="M39.1094 29.772C40.1069 29.8023 41.0727 29.9765 42.0085 30.2947H42.1019C42.1652 30.3248 42.2127 30.3581 42.2444 30.3881C42.5943 30.5006 42.9252 30.6272 43.2419 30.8014L43.8435 31.0706C44.081 31.1972 44.366 31.4331 44.5244 31.5297C44.6827 31.6231 44.8569 31.7197 44.9994 31.829C46.7585 30.4847 48.8944 29.7564 51.0952 29.772C52.0943 29.772 53.0918 29.9131 54.0402 30.2314C59.8843 32.1314 61.9901 38.5439 60.231 44.1489C59.2335 47.0131 57.6027 49.6272 55.4668 51.7631C52.4094 54.724 49.0543 57.3523 45.4427 59.6165L45.0469 59.8556L44.6352 59.6006C41.011 57.3523 37.6369 54.724 34.551 51.7473C32.4293 49.6114 30.7969 47.0131 29.7835 44.1489C27.9944 38.5439 30.1002 32.1314 36.0076 30.1981C36.4668 30.0398 36.9402 29.929 37.4152 29.8672H37.6052C38.0501 29.8023 38.4919 29.772 38.9352 29.772H39.1094ZM53.2169 34.7756C52.5677 34.5523 51.8552 34.9022 51.6177 35.5672C51.396 36.2322 51.7444 36.9606 52.4094 37.1965C53.4243 37.5765 54.1035 38.5756 54.1035 39.6823V39.7314C54.0735 40.094 54.1827 40.4439 54.4044 40.7131C54.626 40.9822 54.9585 41.139 55.3069 41.1722C55.956 41.1548 56.5102 40.6339 56.5577 39.9673V39.7789C56.6052 37.5606 55.261 35.5514 53.2169 34.7756Z" fill="url(#paint1_linear_1434_858)"/>
                        <defs>
                        <linearGradient id="paint0_linear_1434_858" x1="0" y1="0" x2="90" y2="90" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#8482FF"/>
                        <stop offset="1" stop-color="#7723FE"/>
                        </linearGradient>
                        <linearGradient id="paint1_linear_1434_858" x1="29.166" y1="29.7717" x2="59.2103" y2="61.3971" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#8482FF"/>
                        <stop offset="1" stop-color="#7723FE"/>
                        </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="overview__content">
                      <h3>Very Friendly Service</h3>
                      <p>We will provide excellent and friendly service for the sake of our customers.</p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Overview