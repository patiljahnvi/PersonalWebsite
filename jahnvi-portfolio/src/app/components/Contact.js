
export default function Contact() {
return (
<section className="py-16 px-6 md:px-20 bg-gray-100 text-center">
<h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
<p className="text-lg text-gray-600 mb-6">
I'm open to exciting opportunities and collaborations. Let's build something amazing together!
</p>
<div className="flex justify-center gap-6">
<a href="mailto:jahnvipatil@example.com" className="text-indigo-600 hover:underline font-medium">Email</a>
<a href="https://linkedin.com/in/jahnvipatil" className="text-indigo-600 hover:underline font-medium" target="_blank">LinkedIn</a>
<a href="https://github.com/jahnvipatil" className="text-indigo-600 hover:underline font-medium" target="_blank">GitHub</a>
</div>
</section>
);
} 