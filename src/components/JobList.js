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

const JobList = () => {
	const [jobData, setJobData] = useState([]);
	const [isLargerThan400] = useMediaQuery("(min-width: 900px)");
  const [jobInfo, setJobInfo] = useState("");
  const [selected, setSelected] = useState(null)

	const handleCardClick = (info) => {
		setJobInfo(info);
		console.log(info);
	};

	useEffect(() => {
		setJobData(data);
	}, []);

	return (
		<HStack spacing={2} padding='10px' align='center' justify='center'>
      {!isLargerThan400 ? (
				<Stack>
					{jobData.map((info, index) => (
						<JobCard
							key={index}
              props={info}
              selected={selected}
              setSelected={setSelected}
							onClick={() => handleCardClick(info.job_title)}
						/>
					))}
          </Stack>
			) : (
				<>
					<Stack>
						{jobData.map((info, index) => (
							<JobCard
								key={index}
                props={info}
                selected={selected}
                setSelected={setSelected}
								onClick={() => handleCardClick(info.job_title)}
							/>
						))}
					</Stack>
					<Box
						style={{
							display: "grid",
							gridTemplateColumns: "repeat(auto-fit, minmax(700px, 1fr))",
                gridTemplateRows: "repeat(auto-fit, minmax(1000px, 1fr))",
						}}
						alignSelf='start'
						borderWidth='1px' borderRadius='lg' overflow='hidden'
					>
						<Heading size='md' style={{textAlign: 'center', margin: '10px 0 0 0'}}>{jobInfo}</Heading>
					</Box>
				</>
			)}
		</HStack>
	);
};

export default JobList;
