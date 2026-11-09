# UX da versão web

Referência: Revenue-Centric Design, ideias de Richard (@richardrx), compiladas com permissão por Helio Costa: https://github.com/heliocosta-dev/revenue-centric-design . Termos: ../third-party/revenue-centric-design-LICENSE.txt.

- **F-pattern / painel acionável**: total vendido no primeiro cartão, separado de dinheiro, cartão e número de registros. Estoque baixo traz uma orientação de reposição, sem indicadores artificiais de crescimento.
- **Menor esforço percebido**: cinco categorias visíveis, pagamento por grupo de botões e campos de divisão exibidos só quando necessários. Quantidade e total ficam próximos.
- **Estado vazio com próximo passo**: configurar turno e registrar a primeira venda, sem dados financeiros fictícios.
- **Valor antes de aprendizado**: totais e estoque atualizam após salvar. Feedback explica o impedimento para registrar e confirma o resultado.
- **Prevenção de erros**: dinheiro em centavos inteiros, quantidades inteiras, bloqueio por estoque insuficiente, divisão exata, exclusão confirmada e validação dos backups.
- Layout responsivo, foco visível, rótulos nos campos, avisos acessíveis e atalho Ctrl+Enter.

Validação executada: três testes automatizados cobrindo preços de WD/SD/Cinema, combinações de desconto JD, parsing monetário, totais de pagamentos e saldo de estoque; sintaxe JavaScript; abertura real no navegador e inspeção visual do painel e formulário de turno. O fluxo completo de vendas no navegador e a apresentação em telefone ainda precisam de validação adicional. Não foram medidas melhorias de conversão ou tempo de tarefa com usuários reais.
