import React, { useState } from "react";
import './wed.css'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBCol,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow,
} from 'mdb-react-ui-kit';

import {
    weddone,
    plant,
    plantwo,
    couples,
    flower,
    destin,
    cocktails,
    nonveg,
    veg,
    temples,
} from "../../constants/assets";


import { Chip } from 'primereact/chip';
import DisplayLottie from "../../blocks/DisplayLottie";
const Wed = () => {
    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    const [basicActive, setBasicActive] = useState('home');

    const handleBasicClick = (value) => {
        if (value === basicActive) return;

        setBasicActive(value);
    }

    return (
        <div className='wed-content'>
            <div className="wed-options">
                <MDBTabs justify className='mb-3'>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                            Categories
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                            Planning
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
                            Lists
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                <MDBTabsContent>
                    <MDBTabsPane open={justifyActive === 'tab1'}>
                        <div className="wedCategories">
                            <div class="d-flex wedCat cat-lavender">
                                <div className="wedCate-details w-70">
                                    <span className="webCateTopic">Venues</span>
                                    <span className="webCateSub">
                                        destination, Resorts, Temples, Auditoriums
                                    </span>
                                </div>
                                <div className="wedCate-img img-dest w-30">
                                    {/* <img src={weddone} alt="destination wedding" /> */}
                                </div>
                            </div>
                            <div class="d-flex wedCat cat-peach">
                                <div className="wedCate-details w-70">
                                    <span className="webCateTopic">Jewels</span>
                                    <span className="webCateSub">
                                        Golds, Diamonds, Platinum, Pearls
                                    </span>
                                </div>
                                <div className="wedCate-img img-jewel w-30">
                                    {/* <img src={weddone} alt="destination wedding" /> */}
                                </div>
                            </div>
                            <div class="d-flex wedCat cat-green ">
                                <div className="wedCate-details w-70">
                                    <span className="webCateTopic">Food</span>
                                    <span className="webCateSub">
                                        Indian, Continental, Chinese, Traditional
                                    </span>
                                </div>
                                <div className="wedCate-img img-food w-30">
                                    {/* <img src={weddone} alt="destination wedding" /> */}
                                </div>
                            </div>
                            <div class="d-flex wedCat cat-tangerine">
                                <div className="wedCate-details w-70">
                                    <span className="webCateTopic">Attires</span>
                                    <span className="webCateSub">
                                        Traditionals, Western, Extravagant
                                    </span>
                                </div>
                                <div className="wedCate-img img-cloth w-30">
                                    {/* <img src={weddone} alt="destination wedding" /> */}
                                </div>
                            </div>
                        </div>
                    </MDBTabsPane>
                    <MDBTabsPane open={justifyActive === 'tab2'}>
                        <div className="wedLists">
                            <MDBRow className="w-100">
                                <MDBCol size={3}>
                                    <MDBListGroup light small>
                                        <MDBTabs>
                                            <MDBListGroupItem action active={basicActive === 'home'} noBorders className='px-3'>
                                                <MDBTabsItem>
                                                    <MDBTabsLink onClick={() => handleBasicClick('home')}>Plan Bhandirvan</MDBTabsLink>
                                                </MDBTabsItem>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem action active={basicActive === 'profile'} noBorders className='px-3'>
                                                <MDBTabsItem>
                                                    <MDBTabsLink onClick={() => handleBasicClick('profile')}>Plan Indraprasth</MDBTabsLink>
                                                </MDBTabsItem>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem action active={basicActive === 'messages'} noBorders className='px-3'>
                                                <MDBTabsItem>
                                                    <MDBTabsLink onClick={() => handleBasicClick('messages')}>Plan Vaikunt</MDBTabsLink>
                                                </MDBTabsItem>
                                            </MDBListGroupItem>
                                            <MDBListGroupItem action active={basicActive === 'settings'} noBorders className='px-3'>
                                                <MDBTabsItem>
                                                    <MDBTabsLink onClick={() => handleBasicClick('settings')}>Plan Kailash</MDBTabsLink>
                                                </MDBTabsItem>
                                            </MDBListGroupItem>
                                        </MDBTabs>
                                    </MDBListGroup>
                                </MDBCol>

                                <MDBCol size={8}>
                                    <MDBTabsContent>
                                        <MDBTabsPane open={basicActive === 'home'}>
                                            <div className="destination wedding">
                                                <div className="plant">
                                                    <DisplayLottie lottiename={plant} />
                                                </div>
                                                <div className="couples">
                                                    <DisplayLottie lottiename={couples} />
                                                </div>
                                                <div className="flower">
                                                    <DisplayLottie lottiename={flower} />
                                                </div>
                                                <div className="plantwo">
                                                    <DisplayLottie lottiename={plantwo} />
                                                </div>

                                                <div className="card flex flex-row flex-wrap gap-2 w-100 h-3 chips-custom" >
                                                    <Chip label="Destination" image={destin} alt='destination wedding image' className="chips chip-destination" />
                                                    <Chip label="Vegitarian" image={veg} className="chips chip-veg" />
                                                    <Chip label="Non veg" image={nonveg} className="chips chip-nonveg" />
                                                    <Chip label="Cocktails" image={cocktails} removable className="chips chip-drinks" />
                                                </div>
                                            </div>
                                        </MDBTabsPane>
                                        <MDBTabsPane open={basicActive === 'profile'}>
                                            "Comprises of extravagant wedding plans"
                                            <div className="destination wedding">
                                                <div className="couples">
                                                    <DisplayLottie lottiename={couples} />
                                                </div>

                                                <div className="card flex flex-row flex-wrap gap-2 w-100 h-3 chips-custom" >
                                                    <Chip label="Destination" image={destin} alt='destination wedding image' className="chips chip-destination" />
                                                    <Chip label="Vegitarian" image={veg} className="chips chip-veg" />
                                                    <Chip label="Non veg" image={nonveg} className="chips chip-nonveg" />
                                                    <Chip label="Cocktails" image={cocktails} removable className="chips chip-drinks" />
                                                </div>
                                            </div>
                                        </MDBTabsPane>
                                        <MDBTabsPane open={basicActive === 'messages'}>
                                            "Devotional Wedding plans infront of lord himself"
                                            <div className="destination wedding">
                                                <div className="couples">
                                                    <DisplayLottie lottiename={couples} />
                                                </div>

                                                <div className="card flex flex-row flex-wrap gap-2 w-100 h-3 chips-custom" >
                                                    <Chip label="Temple" image={temples} alt='temple wedding image' className="chips chip-temple" />
                                                    <Chip label="Vegitarian" image={veg} className="chips chip-veg" />
                                                </div>
                                            </div>
                                        </MDBTabsPane>
                                        <MDBTabsPane open={basicActive === 'settings'}>
                                            Simple yet decent as elegant plans
                                            <div className="destination wedding">
                                                <div className="couples">
                                                    <DisplayLottie lottiename={couples} />
                                                </div>

                                                <div className="card flex flex-row flex-wrap gap-2 w-100 h-3 chips-custom" >
                                                    <Chip label="Temple" image={temples} alt='temple wedding image' className="chips chip-temple" />
                                                    <Chip label="Vegitarian" image={veg} className="chips chip-veg" />
                                                    <Chip label="Non veg" image={nonveg} className="chips chip-nonveg" />
                                                </div>
                                            </div>
                                        </MDBTabsPane>
                                    </MDBTabsContent>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </MDBTabsPane>
                    <MDBTabsPane open={justifyActive === 'tab3'}>Lists going here...</MDBTabsPane>
                </MDBTabsContent>
            </div>
        </div>
    );
}
export default Wed;