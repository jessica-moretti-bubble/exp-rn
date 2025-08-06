import { Challenge } from "@/types/model/jukebox-challenge.model";
import IconDirector from "src/components/svg/challenge/icon-director";
import IconManager from "src/components/svg/challenge/icon-manager";
import IconProducer from "src/components/svg/challenge/icon-producer";
import IconScout from "src/components/svg/challenge/icon-scout";
import IconTalent from "src/components/svg/challenge/icon-talent";


interface IconChallengeProperties {challenge: Challenge}

export const IconChallenge = ({challenge}: IconChallengeProperties) => {

    switch(challenge){
        case Challenge.SCOUT: 
        return <IconScout/> 
        case Challenge.TALENT: 
        return <IconTalent/> 
        case Challenge.MANAGER: 
        return <IconManager/> 
        case Challenge.DIRECTOR: 
        return <IconDirector/> 
        case Challenge.PRODUCER: 
        return <IconProducer/> 
    }
}