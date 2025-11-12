import { WelcomeMessage } from "../widgets/home/WelcomeMessage"
import { WhyChooseUs } from "../widgets/home/WhyChooseUs"
import { Calculator } from "../widgets/home/Calculator"
import { Team } from "../widgets/home/Team"
import { Stack } from "../widgets/home/Stack"
import { FAQ } from "../widgets/home/FAQ"

export const HomePage = () => {
    return (
        <>
            <WelcomeMessage />
            <div id="advantages">
                <WhyChooseUs />
            </div>
            <div id="calculator">
                <Calculator />
            </div>
            <div id="team">
                <Team />
            </div>
            <div id="technologies">
                <Stack />
            </div>
            <div id="faq">
                <FAQ />
            </div>
        </>
    )
}