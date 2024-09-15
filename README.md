# LlamaIndex.TS Playground

Based on the [LlamaIndex.TS](https://github.com/run-llama/ts-playground) project.

## What is LlamaIndex?

LlamaIndex is a framework for building LLM-powered applications. LlamaIndex helps you ingest, structure, and access
private or domain-specific data. It's available [as a Python package](https://docs.llamaindex.ai/en/stable/) and in
TypeScript (this package). LlamaIndex.TS offers the core features of LlamaIndex for popular runtimes like
Node.js (official support), Vercel Edge Functions (experimental), and Deno (experimental).

## Why LlamaIndex.TS?

LLMs offer a natural language interface between humans and inferred data. Widely available models come pre-trained on
huge amounts of publicly available data, from Wikipedia and mailing lists to textbooks and source code.

Applications built on top of LLMs often require augmenting these models with private or domain-specific data. That data
is often distributed across siloed applications and data stores. It's behind APIs, in SQL databases, or trapped in PDFs
and slide decks.

LlamaIndex.TS helps you unlock that data and then build powerful applications with it.

## 🦙 What is LlamaIndex for?

LlamaIndex.TS handles several major use cases:

* Structured Data Extraction: turning complex, unstructured and semi-structured data into uniform, programmatically
  accessible formats.
* Retrieval-Augmented Generation (RAG): answering queries across your internal data by providing LLMs with up-to-date,
  semantically relevant context including Question and Answer systems and chatbots.
* Autonomous Agents: building software that is capable of intelligently selecting and using tools to accomplish tasks in
  an interactive, unsupervised manner.

## Getting Started

Run `pnpm install` and `pnpm run dev`

Make sure to set your OpenAI key: `export OPENAI_API_KEY-="sk-..."`

Enjoy!
