import React from "react";
import { GiCook } from "react-icons/gi";
import ReactMarkdown from "react-markdown";
import Header from "../layout/Header";
import { dotWave } from "ldrs";
import { motion, useInView } from "framer-motion";

const Chat = ({ messages, isLoading }) => {
  dotWave.register();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-background p-6 overflow-x-hidden">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <l-dot-wave size="78" speed="1.4" color="gray" />
        </div>
      )}

      <Header ShowBurger={true} className="py-0" />

      <motion.div
        ref={ref}
        className="bg-neutral-900 mt-4 shadow-lg rounded-2xl p-6 border border-zinc-700 max-w-2xl md:max-w-7xl w-full opacity-0"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {/* Ícone + Título */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          initial={{ opacity: 0, y: -10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GiCook className="text-yellow-400 text-4xl" />
          <h2 className="text-2xl font-bold text-slate-300">Receita Gerada</h2>
        </motion.div>

        {/* Conteúdo Markdown formatado */}
        <ReactMarkdown
          className="prose prose-blue max-w-none"
          components={{
            h2: ({ node, ...props }) => (
              <h2 className="text-2xl font-bold text-slate-300 flex items-center gap-2">
                {props.children}
              </h2>
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-xl font-semibold text-slate-400 flex items-center gap-2">
                {props.children}
              </h3>
            ),
            h4: ({ node, ...props }) => (
              <h4 className="text-lg font-semibold text-slate-400 flex items-center gap-2">
                {props.children}
              </h4>
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc list-inside mt-2 text-slate-200">{props.children}</ul>
            ),
            ol: ({ node, ...props }) => (
              <ol className="list-decimal list-inside mt-2 text-blue-400">{props.children}</ol>
            ),
            li: ({ node, ...props }) => (
              <motion.li
                className="leading-relaxed"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 }}
              >
                {props.children}
              </motion.li>
            ),
            p: ({ node, ...props }) => (
              <p className="text-slate-200 leading-relaxed">{props.children}</p>
            ),
          }}
        >
          {messages}
        </ReactMarkdown>
      </motion.div>
    </div>
  );
};

export default Chat;
