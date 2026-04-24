<div align="center">
  <img src="https://raw.githubusercontent.com/AAD-Systems/thermolab/banner.png" width="100%" alt="Arvexa ThermoCalc Banner">
  
  <br />

  # 🔵 Arvexa ThermoCalc (v0.1.0-alpha)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Version](https://img.shields.io/badge/version-0.1.0--alpha-cyan.svg)](#)
  [![Status](https://img.shields.io/badge/status-active-green.svg)](#)

  > **Arvexa Technologies** | High-Performance Tools for Chemical Engineering
  
  *O ThermoCalc é um motor de processamento termodinâmico desenhado para eliminar erros em cascata em projetos de ciclos térmicos, automatizando a interpolação e o rastreamento de estados físicos.*

  **[Acessar Aplicação Web](https://aad-systems.github.io/thermolab/)**
</div>

---

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

* [x] **Motor Matemático e Rastreamento de Estados** (Concluído)
* [ ] **Fase 2:** Módulo de Visão Computacional (OCR) para extração de dados direto das tabelas físicas.
* [ ] **Fase 3:** Integração com bibliotecas CoolProp/Numpy.
