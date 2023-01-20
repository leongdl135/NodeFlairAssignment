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
	QueryQuery,
	useMediaQuery,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";
import data from "../database/companyinfo.json";
import JobCard from "./JobCard";
import JobDescription from "./JobDescription";

const JobList = () => {
	const [jobData, setJobData] = useState([]);
	const [isLargerThan400] = useMediaQuery("(min-width: 900px)");

	useEffect(() => {
		setJobData(data);
	}, []);

	return (
		<HStack spacing={2} padding='10px' align='center' justify='center'>
			{!isLargerThan400 ? (
				<Stack>
					{jobData.map((info, index) => (
						<JobCard key={index} props={info} />
					))}
				</Stack>
			) : (
				<>
					<Stack>
						{jobData.map((info, index) => (
							<JobCard key={index} props={info} />
						))}
					</Stack>
					<JobDescription />
				</>
			)}
		</HStack>
	);
};

export default JobList;
