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

import { useState, useEffect } from "react";
import data from "../database/companyinfo.json";
import JobCard from "./JobCard";
import JobDescription from "./JobDescription";

const JobList = () => {
	const [jobData, setJobData] = useState([]);

	useEffect(() => {
		setJobData(data);
		console.log(jobData);
	}, []);

	return (
		<HStack spacing={2} padding='10px' align="center" justify="center">
			<Stack>
				{jobData.map((info, index) => (
					<JobCard key={index} props={info} />
				))}
      </Stack>
      <JobDescription/>
		</HStack>
	);
};

export default JobList;
