import { Box, Heading, Button, Text, Container, Flex } from "native-base";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { useState } from "react";
import { useSettingsContext } from "../../contexts/dataContext";

const Timer = () => {
    const [launch, setLaunch] = useState(false);
    const {time, setTime, breakTime, setBreakTime} = useSettingsContext();

    const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60

        return (
            <Text fontSize="lg">
                {minutes}:{seconds}
            </Text>
        )
    }
    return (
        <Box width="100%" height="100%" alignItems="center" padding="5"> 
            <Heading padding="5">Timer</Heading>
            <Button
                size="lg"
                onPress={() => setLaunch(!launch)}
            >
                Go
            </Button>
            {launch && (
            <Box width="100%" height="100%" alignItems="center" justifyContent="center">
                        <CountdownCircleTimer
                            isPlaying
                            duration={time}
                            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                            colorsTime={[7, 5, 2, 0]}
                        >
                            {children}
                        </CountdownCircleTimer>
                    </Box>
            )}
        </Box>
    )
}

export default Timer;