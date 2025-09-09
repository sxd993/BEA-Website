import { WelcomeMessage } from "../features/home/ui/WelcomeMessage"
import { WhyChooseUs } from "../features/home/ui/WhyChooseUs"
import { Calculator } from "../features/home/ui/Calculator"
import { Team } from "../features/home/ui/Team"
import { Stack } from "../features/home/ui/Stack"
import { NeededTechnology } from "../features/home/ui/NeededTechnology"

export const HomePage = () => {
    return (
        <>
            <WelcomeMessage />
            <WhyChooseUs />
            <Calculator />
            <Team />
            <Stack />
            <NeededTechnology />
        </>
    )
}