## Site Institucional – Psicóloga Sandy Goudard

Site institucional desenvolvido para apresentação profissional, divulgação de serviços e captação de pacientes por meio de formulário integrado ao Google Sheets.

## Visão Geral

Este projeto consiste em um site estático responsivo com integração externa para armazenamento de dados e notificação automática.
O objetivo principal é oferecer uma presença digital profissional, com foco em credibilidade, acessibilidade e facilidade de contato.

O sistema permite que potenciais pacientes:

Conheçam a profissional e suas áreas de atuação

Acessem informações sobre o atendimento

Consultem dúvidas frequentes

Entrem em contato via WhatsApp

Solicitem agendamento através de formulário online

## Funcionalidades

1. Apresentação Institucional

Seção de apresentação profissional

Galeria de imagens

Áreas de atuação destacadas

2. Página de Dúvidas (FAQ)

Perguntas frequentes organizadas

Estrutura expansível

Navegação simples entre páginas

3. Integração com WhatsApp

Botão fixo flutuante

Link dinâmico com mensagem automática

Número configurável via JavaScript

4. Formulário de Agendamento

## Campos coletados:

Nome completo

Telefone com DDD

Relato da situação

Validações aplicadas:

Nome mínimo de 3 caracteres

Telefone brasileiro com 11 dígitos (DDD + 9)

Relato mínimo de 10 caracteres

5. Armazenamento e Notificação

Envio dos dados via Google Apps Script

Registro automático em Google Sheets

Notificação por e-mail a cada novo envio

## Tecnologias Utilizadas

HTML5

CSS3

JavaScript (Vanilla)

Google Apps Script

Google Sheets

GitHub Pages (hospedagem)

## Estrutura do Projeto
/
├── index.html
├── duvidas.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── main.js
    │   └── phone-mask.js
    └── imagens/

    Organização do Código
HTML

Estrutura semântica e separação clara de seções institucionais e formulário.

CSS

Arquivo único centralizado (style.css), responsável por:

Layout responsivo

Paleta de cores personalizada

Componentização visual

Estilização de botões e formulários

JavaScript

Separado em dois arquivos:

main.js

Configuração de WhatsApp

Atualização automática do ano

Validação e envio do formulário

Integração com Google Apps Script

phone-mask.js

Aplicação de máscara para telefone brasileiro

Controle de entrada de dados numéricos

## Organização do Código
HTML

Estrutura semântica e separação clara de seções institucionais e formulário.

CSS

Arquivo único centralizado (style.css), responsável por:

Layout responsivo

Paleta de cores personalizada

Componentização visual

Estilização de botões e formulários

JavaScript

Separado em dois arquivos:

main.js

Configuração de WhatsApp

Atualização automática do ano

Validação e envio do formulário

Integração com Google Apps Script

phone-mask.js

Aplicação de máscara para telefone brasileiro

Controle de entrada de dados numéricos

## Publicação

Hospedado na Hostinger.

Upload realizado via:

Gerenciador de Arquivos (hPanel)
ou

FTP (FileZilla)

## Segurança e Privacidade

Os dados coletados pelo formulário são utilizados exclusivamente para contato e agendamento.

Em caso de emergência:

SAMU: 192

CVV: 188

Os dados coletados pelo formulário são utilizados exclusivamente para contato e agendamento.

Em caso de emergência:

SAMU: 192

CVV: 188
