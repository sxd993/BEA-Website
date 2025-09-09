import { WelcomeMessage } from "../features/home/ui/WelcomeMessage"
import { WhyChooseUs } from "../features/home/ui/WhyChooseUs"
import { Calculator } from "../features/home/ui/Calculator"
import { Team } from "../features/home/ui/Team"

export const HomePage = () => {
    return (
        <>
            <WelcomeMessage />
            <WhyChooseUs />
            <Calculator />
            <Team />
        </>
    )
}