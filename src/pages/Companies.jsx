import React from 'react'
import { companyList } from '../utils/list'
import CompanyTemplate from '../components/CompanyTemplate'
import PageTrans from '../anim/PageTrans'
import Anim from '../anim/Anim'
import ImageAnim from '../components/ImageAnim'

const Companies = () => {
    return (
        <PageTrans>
            <section className="w-full h-auto min-h-screen bg-blk relative flex items-start py-20">

                <h1 className="text-white/10 text-[10rem] absolute bottom-0 -right-20 font-[700] md:block hidden">COMPANY</h1>

                <div className="bg-rd/80 w-[18rem] h-[18rem] rounded-full absolute blur-[13rem] bottom-32 right-32"></div>

                <div className="text-white font-raleway px-10 max-w-[1500px] w-full mx-auto mt-[4rem] flex items-center">

                    <div className="lg:w-[60%]">
                        <Anim delay={0.1}>
                            <h3 className='text-rd font-[700] uppercase'>CC</h3>
                            <h1 className="font-[800] text-5xl 2xl:text-6xl">COMPANIES</h1>
                        </Anim>
                        <div className="max-w-[50rem] mt-4 2xl:text-lg flex flex-col gap-y-6 font-[500]">
                            <Anim delay={0.2}>

                                <p className="">
                                    The string of companies that will be under the CC company structure. All our companies will be promoted by influencers in our network to have the right traction at the start of the companies. There will be a good due diligence on what kind of business are most profitable example
                                </p>
                            </Anim>
                        </div>
                        <Anim delay={0.3}>
                            <div className="mt-16 flex flex-wrap gap-x-16 gap-y-16">
                                <CompanyTemplate list={companyList[0]} title="online" />
                                <CompanyTemplate list={companyList[1]} title="services" />
                                <CompanyTemplate list={companyList[2]} title="physical" />
                                <CompanyTemplate list={companyList[3]} title="apps" />
                            </div>
                        </Anim>
                    </div>

                    <div className="w-[40%] items-center justify-center lg:flex hidden">
                        <ImageAnim>
                            <img src="/Eco.webp" alt="NFT" className="w-[18rem] 2xl:w-[22rem]" />
                        </ImageAnim>
                    </div>

                </div>

            </section>
        </PageTrans>
    )
}

export default Companies