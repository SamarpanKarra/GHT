import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section style={{"display":"flex","text-align":"center","margin-top":"40px"}}
                title="Global Health-Tech Life Sciences University and Innovation Hub"
                description="We are actively working to fix that through innovating health, Technology and Life Sciences under one roof"
                backgroundImg="global-health.jpg"
                leftBtnText="Read More about GHLUIH"
            />
            <Section
                title="Digital therapeutics for autism spectrum disorder (ASD) "
                description="Globally 73 million are affected by ASD. CognitiveBotics (based out of Hyd) enables digital therapeutics for basic social and communication skills needed for autism children from the age 3-4 onwards using patent pending digital technologies and caters to autistic individuals over an internet-based application."
                backgroundImg="digital.jpg"
                leftBtnText="View"
                rightBtnText="Learn More"
            />
            <Section
                title="Multiorgan transplant brought to India by eminent surgeon"
                description="Dr. Kancherla Ravindranath, a world-renowned expert in Surgical Gastroenterology has built the Global Hospitals Group into a premier healthcare facility with niche multi-organ transplantation infrastructure. He has popularised minimal access surgery in India and has established multi-organ transplant programmes including transplants of the liver, heart , lungs, kidney and pancreases. "
                backgroundImg="multiorgan.jpg"
                leftBtnText="View"
                rightBtnText="Learn More"
            />
            <Section
                title="AI/VR based eye screening"
                description="Working with LVPEI developed AI/VR based eye screening device to democratize eye screening. "
                backgroundImg="ivr1.jpg"
                leftBtnText="View"
                rightBtnText="Learn More"
            />
            <Section
                title="AYUSH"
                description="India revives Ayurveda,Yoga, Unani, Siddha & Homoeopathy (AYUSH) to promote health and wellness"
                backgroundImg="Yoga.jpg"
                leftBtnText="View"
                rightBtnText="Learn More"
            />
            
        </Container>
    )
}

export default Home

const Container = styled.div`India revives Ayurveda,Yoga, Unani, Siddha & Homoeopathy (AYUSH) to promote health and wellness
    height:100vh;
`
