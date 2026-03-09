export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-white font-sans text-gray-900">
            {/* Left Panel - Content */}
            <div className="w-full md:w-1/2 flex flex-col p-8 md:p-12 lg:p-16 h-screen overflow-y-auto">
                <div className="mb-8 md:mb-12">
                    <img src="/logo.png" alt="Rush Robotics" className="h-8 w-auto object-contain" />
                </div>

                <div className="flex-grow flex flex-col items-center w-full mx-auto">
                    <ContactForm />
                </div>
            </div>

            {/* Right Panel - Gradient Background */}
            <div className="hidden md:block md:w-1/2 fixed right-0 top-0 h-screen p-4">
                <div className="w-full h-full rounded-2xl lovable-gradient pointer-events-none"></div>
            </div>
        </div>
    );
}

function ContactForm() {
    return (
        <div className="flex justify-center w-full">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSee0kd-KKbIOAaL8ggFfU0cPS80b69vWSVJYXDH6EOcW1ODhA/viewform?embedded=true"
                width="640"
                height="2671"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full max-w-[640px]"
            >
                Loading…
            </iframe>
        </div>
    );
}
