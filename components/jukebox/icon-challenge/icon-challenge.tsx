import IconDirector from "components/svg/challenge/icon-director";
import IconManager from "components/svg/challenge/icon-manager";
import IconProducer from "components/svg/challenge/icon-producer";
import IconScout from "components/svg/challenge/icon-scout";
import IconTalent from "components/svg/challenge/icon-talent";
import { Challenge } from "model/jukebox-challenge.model";


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