import badgeColors from '@material-tailwind/react/theme/components/badge/badgeColors'
import Banner from 'components/Banner'
import React from 'react'

function Home() {
    return (
            <div>
                <Banner mainClass="flex items-center justify-center mx-auto my-5 sb-contentColumn sb-global-gutters sb-contentColumn--xlarge px-50 pt-7" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84026.jpg" title="For your enjoy-mint" content="Hooray for our newest cooler-than-cool Chocolate Java Mint Frappuccino® blended beverage." background={"#73F157"}/>
                <Banner mainClass="flex items-center justify-center mx-auto my-5 sb-contentColumn sb-global-gutters sb-contentColumn--xlarge px-50 pt-7" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83789.jpg" title="For your enjoy-mint" content="Hooray for our newest cooler-than-cool Chocolate Java Mint Frappuccino® blended beverage."/>
                <Banner mainClass="flex items-center justify-center mx-auto my-5 sb-contentColumn sb-global-gutters sb-contentColumn--xlarge px-50 pt-7" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83790.jpg" title="For your enjoy-mint" content="Hooray for our newest cooler-than-cool Chocolate Java Mint Frappuccino® blended beverage." background={"#299611"}/>
                <Banner mainClass="flex items-center justify-center mx-auto my-5 sb-contentColumn sb-global-gutters sb-contentColumn--xlarge px-50 pt-7" src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-83791.jpg" title="For your enjoy-mint" content="Hooray for our newest cooler-than-cool Chocolate Java Mint Frappuccino® blended beverage." background={"#299611"}/>
            </div>
    )
}

export default Home