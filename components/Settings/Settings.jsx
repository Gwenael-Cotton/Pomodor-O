import { Box, Text, Slider, Stack } from "native-base";
import { useState, useContext } from "react";
import { useSettingsContext } from "../../contexts/dataContext";

const Settings = () => {
    // const [time, setTime] = useState(25);
    // const [breakTime, setBreakTime] = useState(5);

    const {time, setTime, breakTime, setBreakTime} = useSettingsContext();


    return (
       <Box padding="5" w="100%" height="100%" alignItems="center" justifyContent="center">
            <Stack space={4} alignItems="center" mb="10" w="75%" maxW="200">
                <Text fontSize="20">Work - {time} min</Text>
                <Slider defaultValue={25} colorScheme="cyan" onChange={v => {
                setTime(Math.floor(v));
            }} onChangeEnd={v => {
                v && setTime(Math.floor(v));
            }}>
                <Slider.Track>
                    <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
                </Slider>
            </Stack>
            <Stack space={4} alignItems="center" w="75%" maxW="200">
                <Text fontSize="20">Break - {breakTime} minutes</Text>
                <Slider defaultValue={5} colorScheme="cyan" onChange={v => {
                setBreakTime(Math.floor(v));
            }} onChangeEnd={v => {
                v && setBreakTime(Math.floor(v));
            }}>
                <Slider.Track>
                    <Slider.FilledTrack />
                </Slider.Track>
                <Slider.Thumb />
                </Slider>
            </Stack>
        </Box>
    )
}

export default Settings;