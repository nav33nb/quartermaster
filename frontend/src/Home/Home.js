import helm from "./img/helm.png"
import Title from "../Title"
import Features from "../Features"

export default function Home() {
    return (
        <div>
            <div className="flex h-screen columns-2">
                <div className="h-1/2 m-auto mx-10 w-1/3 m-auto">
                <img src={helm} className="animate-[spin_60s_linear_infinite] w-1/4 fixed" alt="helm" />
                </div>
                <div className="w-full m-auto ml-10">
                    <Title />
                    <Features />
                </div>
            </div>
        </div>
    )
}