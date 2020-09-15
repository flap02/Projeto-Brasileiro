const  Discord  =  require ( "discord.js" )
exportações . run  =  async  ( bot ,  mensagem ,  argumentos ,  arg_texto ,  chat )  =>  {
  const  ajuda  =  novo  Discord . MessageEmbed ( )
  
    . setColor ( "VERDE" )
    . setTitle ( "** Ajuda **" )
    . setDescription ( `Olá, meu prefixo é! Este é meu centro de comandos, abaixo você pode ver todos meus comandos, separados por categorias` )
  . addField ( "👮‍♂️ - ** MODERAÇÃO **" ,  "Ban, kick e clear" )
   . addField ( "📁 - ** UTILIDADE **" ,  "Ajuda, ping, digamos, tíquete e tempo de atividade" )
  . addField ( "🎉 - ** DIVERSÃO **" ,  "Kiss e coinflip" )
    . setTimestamp ( )
    . setFooter ( `Comando solicitado por $ { mensagem . membro . displayName } ` ,  mensagem . autor . displayAvatarURL ( { Tamanho : 32 } ) )   
  
  mensagem . canal . enviar ( ajuda )
}
