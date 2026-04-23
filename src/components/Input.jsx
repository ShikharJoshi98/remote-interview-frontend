export default function Input({ ...props }) {
    return (
        <input
            {...props}
            type={props.type || "text"}
            placeholder={props.placeholder}
            className="w-full bg-[#020617] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none"
        />
    )
}