import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Stack,
	Heading,
	Text,
	Divider,
	ButtonGroup,
	Button,
	Box,
	StackDivider,
	HStack,
	VStack,
	Badge,
	Grid,
} from "@chakra-ui/react";
import { FaSearchLocation } from "react-icons/fa";

const JobCard = ({ props, selected, setSelected, onClick }) => {
	const companyInfo = props
  
  const displaySkills = function(skills) {
    var parts = skills.split(",");
    const original_length = parts.length
    parts = parts.slice(0,4)

    return (
      <HStack>
        {parts.map((skill, index) => (
          <Badge key={index} mr={2} variant='subtle' colorScheme='gray' fontSize='0.8em'>
            <Text color="gray.400">{skill.trim()}</Text>
          </Badge>
        ))}
        {original_length > 4 ? <Text>...</Text> : null}
      </HStack>
    )
  }

	return (
		<Card
			onClick={() => { setSelected(companyInfo); onClick(companyInfo) }}
			style={{ border: selected === companyInfo ? '3px solid lightgreen' : 'none'}}
			maxWidth={"sm"}
			role='button'
			_active={{
				bg: "#dddfe2",
				borderColor: "#bec3c9",
			}}
			_hover={{ cursor: "pointer", transform: "scale(1.04)",  transition: "all 0.3s"}}
			padding='5'
		>
			<HStack>
				<Box flex={1}>
					<HStack>
						<Image
							alignSelf='start'
							boxSize='40px'
							src={companyInfo.company_image}
						/>
						<Box alignSelf='start'>
							<Text size='sm' alignSelf='start'>
								{companyInfo.company_name} {companyInfo.rating} ★
							</Text>
							<Text as='b'>{companyInfo.job_title}</Text>

							<HStack>
								<Text as='b' color='green'>
									{companyInfo.posted_time}
								</Text>
								<HStack>
									<FaSearchLocation color='gray' />
									<Text color='gray'>{companyInfo.location}</Text>
								</HStack>
							</HStack>
							<HStack>
								<Text>{companyInfo.salary}</Text>
								{companyInfo.estimate ? (
									<Badge fontSize='0.8em'>EST</Badge>
								) : (
									<></>
								)}
							</HStack>
						</Box>
					</HStack>
				</Box>
				<Badge fontSize='0.8em' colorScheme='green' alignSelf='start'>
					{companyInfo.job_type}
				</Badge>
			</HStack>

			<Box  marginTop={4}>
        <Divider borderWidth="1px" />
        {companyInfo.skills ? (displaySkills(companyInfo.skills)) : (<Box h="20px" w="20px" />)}
      </Box>
		</Card>
	);
};

export default JobCard;
