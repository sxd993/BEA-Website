import { WelcomeMessage } from "../features/home/ui/WelcomeMessage"
import { WhyChooseUs } from "../features/home/ui/WhyChooseUs"
import { Calculator } from "../features/home/ui/Calculator"
import { Team } from "../features/home/ui/Team"
import { Stack } from "../features/home/ui/Stack"
import { FAQ } from "../features/home/ui/FAQ"

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