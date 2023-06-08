import {
	IonButton,
	IonContent,
	IonHeader,
	IonPage,
	IonTitle,
	IonToolbar,
} from "@ionic/react"
import "./Home.css"
import { TestPlugin } from "test-plugin"
import { useState } from "react"
import ExploreContainer from "../components/ExploreContainer"

const Home: React.FC = () => {
	return (
		<IonPage>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<ExploreContainer />
				</IonHeader>
			</IonContent>
		</IonPage>
	)
}

export default Home
