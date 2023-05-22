import React from 'react'

const RewardFAQ = () => {
    return (
        <>

            <section className="dark:bg-gray-800  dark:text-gray-100">
            <div className='my-20 flex justify-center items-center flex-col'>
  <h1 style={{paddingRight:'35rem'}} className="font-bold text-xl ">Questions?</h1>
  <p className="mt-1 dark:text-gray-400">
    We want to help in any way we can. You can ask your barista anytime or we’ve answered the <br></br> most commonly asked questions right over here opens in new window.
  </p>
</div>

                <div className="container mx-4 flex flex-col justify-center p-4 mx-auto md:p-8">
                    <div>
                        <p className="mt-1 dark:text-gray-400 ">At participating stores. Restrictions apply.</p>
                        <p className="mt-1 dark:text-gray-400 ">*Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20.</p>
                        <p className="mt-1 dark:text-gray-400 ">Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20.</p>
                    </div>

                    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32 mt-1">

                        <div>
                            <h3 style={{ color: 'gray' }} className="font-bold">EARNING STARS</h3>
                            <p className="mt-1 dark:text-gray-400 mt-4">Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.{" "}

                                Earn 1 Star per $1 spent when you scan your member barcode in the app, then pay with cash, credit/debit cards or mobile wallets at participating stores. You can also earn 1 Star per $1 spent when you link a payment method and pay directly through the app.

                                Earn 2 Stars per $1 spent when you load funds and pay with your digital Starbucks Card in the app. You can also earn 2 Stars per $1 spent when you pay in-person at a participating store with your registered physical Starbucks Card or scan your member barcode in the app, and then use any physical Starbucks Card (regardless of whether it is registered) to complete the purchase.</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'gray' }} className="font-bold">BENEFITS</h3>
                            <p className="mt-1 dark:text-gray-400 mt-4">Free refills available during same in-store visit only. To qualify for the Birthday Reward, you must have made at least one Star-earning transaction.</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'gray' }} className="font-bold mt-4">TERMS OF USE</h3>
                            <p className="mt-1 dark:text-gray-400 mt-4">For full program details visit
                                starbucks.com/rewards/terms
                                opens in new window.

                                Earn 1 Star per $1 when digitally loading your Starbucks Card with your Starbucks® Rewards Visa® Card: See your Card Rewards Program Agreement for more details.

                                Starbucks® Rewards benefits are available at participating Starbucks stores. Not all stores have the ability to honor Rewards at this time. Visit the
                                Starbucks Store Locator
                                opens in new window and search for locations honoring “Redeem Rewards”.

                                Deposit and credit card products provided by JPMorgan Chase Bank, N.A. Member FDIC</p>
                        </div>
                        <div>
                            <h3 style={{ color: 'gray' }} className="font-bold">REDEEMING REWARDS</h3>
                            <p className="mt-1 dark:text-gray-400 mt-4">Rewards cannot be redeemed for alcoholic beverages or multi-serve items. You pay the difference for any beverage customization over $1 and/or merchandise item over $20. Not all stores honor tiered Rewards. Select stores redeem 200 Stars for free food or drink items only.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default RewardFAQ;