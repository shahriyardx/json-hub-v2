import React, { useRef } from "react"
import MainLayout from "@/components/layouts/main-layout"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import Container from "@/components/shared/container"
import JSONForm from "@/components/forms/json"
import { getJsonData, loadJson } from "@/utils/json"



const CreateJson = () => {
	

	return (
		<MainLayout>
			<Container className="my-10">
				
				<JSONForm />
			</Container>
		</MainLayout>
	)
}

export default CreateJson
