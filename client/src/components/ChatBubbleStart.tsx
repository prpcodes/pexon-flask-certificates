export default function ChatBubbleStart({ children }: { children: React.ReactNode }) {
    return (
        <div className="chat chat-start">
            <div className="chat-bubble">{children}</div>
        </div>
    );
}
