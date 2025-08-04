import { GenericButton } from "components/shared/button/generic-button";
import IconCubbleBig from "components/svg/icon-cubble-big";
import IconUsers from "components/svg/icon-users";
import { Reward } from "model/quiz-data.model";


interface IconQuizRewardProperties {type: Reward}

export const IconQuizReward = ({type}: IconQuizRewardProperties) => {

    switch(type){
        case Reward.CUBBLE: 
        return <IconCubbleBig  />
        case Reward.BOH: 
        return  <GenericButton
        onPress={() => console.log("Icon only")}
        iconLeft={<IconUsers width={20} height={20} />}
        iconOnly
        variant="primary-shadow"
      />

        
    }
}