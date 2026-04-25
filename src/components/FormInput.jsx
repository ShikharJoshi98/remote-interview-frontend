export default function FormInput({ Icon, ...props }) {
    return (
        <div className="w-full space-y-2">
            {props.label && (
                <label className="block text-sm font-medium text-white/60">
                    {props.label}
                    {props.required && (
                        <span className="text-violet-400 ml-1">*</span>
                    )}
                </label>
            )}
            <div className="flex items-center gap-3 w-full rounded-xl border border-white/10 bg-[#0f172a]/60 px-4 py-3 focus-within:border-violet-500 focus-within:ring-1 focus-within:ring-violet-500/30 transition-all">
                {Icon && (
                    <Icon className="text-white/40 text-lg shrink-0" />
                )}
                <input {...props} className="w-full bg-transparent text-white outline-none placeholder:text-white/35 text-sm [&::-webkit-calendar-picker-indicator]:invert" />
            </div>
        </div>
    )
}