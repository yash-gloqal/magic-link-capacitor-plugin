import { IonButton, IonHeader } from "@ionic/react"
import "./ExploreContainer.css"
import { TestPlugin } from "test-plugin"
import { useState } from "react"

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
	const [value, setValue] = useState("")
	const handleLogin = async () => {
		const val = await TestPlugin.loginWithEmailOtp({ email: "yash@gloqal.co" })
		setValue(val.didToken)
	}
	return (
		<div className="container" style={{ margin: "auto", marginTop: "20rem" }}>
			<IonButton onClick={handleLogin}>Login</IonButton>
			<IonHeader>{value}</IonHeader>
		</div>
	)
}

export default ExploreContainer
