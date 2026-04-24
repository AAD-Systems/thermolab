# 🔵 Arvexa ThermoCalc (v0.1.0-alpha)

> **Arvexa Technologies** | High-Performance Tools for Chemical Engineering

O ThermoCalc é um motor de processamento termodinâmico desenhado para eliminar erros em cascata em projetos de ciclos térmicos, automatizando a interpolação e o rastreamento de estados físicos.

**Visualização:** [https://aad-systems.github.io/thermolab/](https://aad-systems.github.io/thermolab/)

## 🚀 Funcionalidades do MVP

* **Fast-Input Grid:** Interface otimizada para digitação rápida de limites de tabelas (Moran/Shapiro).
* **Smart Interpolator:** Interpolação linear e dupla automática, com exibição da fórmula deduzida.
* **State Tracker:** Memória de sessão. Salve as propriedades (Entalpia, Entropia, T, P) de cada ponto do ciclo térmico sem precisar de rascunhos.
* **Validation Engine:** Filtro de coerência física para evitar "fat-fingers" (erros de digitação).

## 🛠️ Stack Técnica

* **Language:** C# 12 / .NET 8 (Core Logic)
* **Framework:** .NET MAUI / Web SPA (v0.1.0)
* **Architecture:** MVVM Light

## 📝 Roadmap (Evolução PIBITI)

* [x] Motor Matemático e Rastreamento de Estados (Concluído)
* [ ] Fase 2: Módulo de Visão Computacional (OCR) para extração de dados direto das tabelas físicas.
* [ ] Fase 3: Integração com bibliotecas CoolProp/Numpy.
