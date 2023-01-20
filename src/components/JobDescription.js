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
	GridItem,
} from "@chakra-ui/react";

function JobDescription(props) {
	return (
		<Box
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(auto-fit, minmax(700px, 1fr))",
				gridTemplateRows: "repeat(auto-fit, minmax(1000px, 1fr))",
			}}
			alignSelf='start'
			background='orange'
    >
      <Heading size='md'>{props.job_title}</Heading>

    </Box>
	);
}

export default JobDescription;
