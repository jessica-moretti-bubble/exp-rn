import { GenericButton } from "@/components/common/button/generic-button";
import { Reward } from "@/types/model/quiz-data.model";
import IconCubbleBig from "src/components/svg/icon-cubble-big";
import IconUsers from "src/components/svg/icon-users";


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