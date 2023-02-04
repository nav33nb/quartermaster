export default function Title() {
    return (
        <div>
            <p className="animate-pulse">(Available today... With Below Features)</p>
            <Feature_login id={1} />
            <Feature_soon id={2} />
            <Feature_github id={"#>"} />
        </div>
    )
}

function Feature_login(props) {
    return (
        <div>
            <h2 className="font-mono font-regular text-3xl mt-20 border-b-2">
                {props.id}. Login Functionality
            </h2>
            <h2 className="font-mono font-light text-xl mt-2">
                Be Assured, The Bare minimum effort has been done to on-board the users<br />
                Users can <s>now</s> soon save their expenses under their username<br />
                Go to <a href="auth" className="underline rounded-lg px-2 hover:text-black hover:bg-yellow">/auth</a> to SignUp or SignIn
            </h2>
        </div>
    )
}

function Feature_soon(props) {
    return (
        <div>
            <h2 className="font-mono font-regular text-3xl mt-20 border-b-2">
                {props.id}. Coming Soon
            </h2>
            <h2 className="font-mono font-light text-xl mt-2">
                Coming Soon
            </h2>
        </div>
    )
}

function Feature_github(props) {
    return (
        <div>
            <h2 className="font-mono font-regular text-3xl mt-20 border-b-2">
                {props.id} Hosted on Github
            </h2>
            <h2 className="font-mono font-light text-xl mt-2">
                [<a href="https://github.com/nav33nb/quartermaster" className=" rounded-lg px-2 hover:text-black bg-light-yellow hover:bg-yellow">GitHub -> quartermaster</a>] by [<a href="https://github.com/nav33nb" className=" rounded-lg px-2 hover:text-black bg-light-yellow hover:bg-yellow"><b>nav33nb</b></a>] and [<a href="https://github.com/Gs-001" className=" rounded-lg px-2 hover:text-black bg-light-yellow hover:bg-yellow"><b>Gs-001</b></a>]
            </h2>
        </div>
    )
}